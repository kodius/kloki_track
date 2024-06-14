defmodule BackendWeb.Resolvers.Auth do
  alias Services.Authorization.AuthenticateUserService

  def create_session(_parent, %{input: input}, _resolution) do
    AuthenticateUserService.execute(Map.get(input, :email), Map.get(input, :password))
  end
end
