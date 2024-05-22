defmodule BackendWeb.Resolvers.Project do
  alias Backend.Tracker
  alias Backend.Repo
  import Ecto.Query, only: [from: 2]

  def resolve_client(%{client: %Backend.Tracker.Client{} = client}, _args, _resolution) do
    {:ok, client}
  end

  def resolve_client(%{client_id: client_id}, _args, _resolution) do
    client = Repo.get!(Backend.Tracker.Client, client_id)
    {:ok, client}
  end

  def list_projects(_parent, _args, _resolution) do
    projects = Tracker.list_projects()
    {:ok, projects}
  end

  def create_project(_parent, %{name: name, public: public, client_id: client_id}, _resolution) do
    Tracker.create_project(%{name: name, public: public, client_id: client_id})
  end

  def update_project(
        _parent,
        %{id: id, name: name, public: public, archived: archived},
        _resolution
      ) do
    Tracker.update_project(id, %{name: name, public: public, archived: archived})
  end

  def archive_project(_parent, %{id: id, archived: archived}, _resolution) do
    Tracker.update_project(id, %{archived: archived})
  end
end
