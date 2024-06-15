defmodule BackendWeb.Schema do
  use Absinthe.Schema
  # Passes request through auth middleware and queries are secured
  use BackedWeb.Auth.CustomMiddleware
  import_types(BackendWeb.Schema.Types)

  alias BackendWeb.Resolvers

  query do
    @desc "Autorizacija za prvu ruku da se moze generirati token iz elixira"
    field :create_session, :session do
      arg(:input, :create_session_input)
      resolve(&Resolvers.Auth.create_session/3)
    end

    field :clients, list_of(:client) do
      resolve(&Resolvers.Client.list_clients/3)
    end

    field :projects, list_of(:project) do
      resolve(&Resolvers.Project.list_projects/3)
    end

    field :me, :user do
      resolve(&Resolvers.User.resolve_me/3)
    end
  end

  mutation do
    field :create_client, type: :client do
      arg(:name, non_null(:string))

      resolve(&Resolvers.Client.create_client/3)
    end

    field :update_client, type: :client do
      arg(:id, non_null(:id))
      arg(:name, :string)
      arg(:archived, :boolean)

      resolve(&Resolvers.Client.update_client/3)
    end

    field :archive_client, type: :client do
      arg(:id, non_null(:id))
      arg(:archived, non_null(:boolean))

      resolve(&Resolvers.Client.archive_client/3)
    end

    field :create_project, type: :project do
      arg(:name, non_null(:string))
      arg(:public, :boolean)
      arg(:client_id, non_null(:id))

      resolve(&Resolvers.Project.create_project/3)
    end

    field :update_project, type: :project do
      arg(:id, non_null(:id))
      arg(:name, :string)
      arg(:public, :boolean)
      arg(:archived, :boolean)

      resolve(&Resolvers.Project.update_project/3)
    end

    field :archive_project, type: :project do
      arg(:id, non_null(:id))
      arg(:archived, non_null(:boolean))

      resolve(&Resolvers.Project.archive_project/3)
    end
  end
end
