defmodule BackendWeb.Context do
  @behaviour Plug

  import Plug.Conn
  import Ecto.Query, only: [where: 2]

  alias Backend.Repo
  alias Schemas.User

  def init(opts), do: opts

  def call(conn, _) do
    context = build_context(conn)
    Absinthe.Plug.put_options(conn, context: context)
  end

  def build_context(conn) do
    with ["Bearer " <> token] <- get_req_header(conn, "authorization"),
         {:ok, %{"user_id" => user_id}} <-
           Services.Token.verify_and_validate(token, Services.Token.Signer.generate()),
         {:ok, current_user} <- authorize(user_id) do
      %{current_user: current_user}
    else
      _ ->
        %{}
    end
  end

  defp authorize(user_id) do
    User
    |> where(id: ^user_id)
    |> Repo.one()
    |> case do
      nil -> {:error, "invalid authorization token"}
      user -> {:ok, user}
    end
  end
end
