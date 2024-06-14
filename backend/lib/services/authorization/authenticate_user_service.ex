defmodule Services.Authorization.AuthenticateUserService do
  import Bcrypt, only: [verify_pass: 2, no_user_verify: 0]
  alias Backend.Repo
  alias Schemas.User

  def execute(email, password) do
    with true <- validate_params(email, nil, password),
         user when not is_nil(user) <-
           Repo.get_by(User, generate_params(email, nil)),
         true <- check_password(password, user),
         {:ok, token, _claims} =
           Services.Token.generate_and_sign(
             %{user_id: user.id},
             Services.Token.Signer.generate()
           ) do
      {:ok, %{token: token, user: nil}}
    else
      response ->
        case response do
          false -> {:error, "Invalid credentials!"}
          nil -> {:error, "User not found!"}
          response -> response
        end
    end
  end

  defp validate_params(nil, _username, _password), do: true
  defp validate_params(_email, nil, _password), do: true

  defp validate_params(_, _, nil), do: {:error, "Password must be provided!!"}

  defp validate_params(_email, _username, _),
    do: {:error, "Cannot provide both email and username!"}

  defp generate_params(nil, username), do: %{username: username}
  defp generate_params(email, nil), do: %{email: email}

  defp check_password(_password, nil), do: no_user_verify()
  defp check_password(password, user), do: verify_pass(password, user.password_digest)
end
