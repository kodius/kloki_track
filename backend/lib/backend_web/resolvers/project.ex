defmodule BackendWeb.Resolvers.Project do
  alias Backend.Tracker
  alias Backend.Repo
  import Ecto.Query, only: [from: 2]

  def list_projects(_parent, _args, _resolution) do
    projects = Tracker.list_projects()

    client_ids =
      projects
      |> Enum.map(& &1.client_id)
      |> Enum.uniq()

    clients =
      from(c in Tracker.Client, where: c.id in ^client_ids)
      |> Repo.all()

    client_map = Map.new(clients, &{&1.id, &1.name})

    projects_with_client_names =
      Enum.map(projects, fn project ->
        client_name = Map.get(client_map, project.client_id)
        Map.put(project, :client_name, client_name)
      end)

    {:ok, projects_with_client_names}
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
