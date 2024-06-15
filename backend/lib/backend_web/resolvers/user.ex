defmodule BackendWeb.Resolvers.User do
  alias Backend.Repo
  alias Schemas.User
  import Ecto.Query, only: [from: 2]

  def resolve_me(_root, args, %{context: %{current_user: current_user}}) do
    user = Repo.get!(User, current_user.id)
    {:ok, user}
  end
end
