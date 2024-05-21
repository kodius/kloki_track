defmodule BackendWeb.Schema.Types do
  use Absinthe.Schema.Notation

  object :client do
    field :id, :id
    field :name, :string
    field :archived, :boolean
    field :projects, list_of(:project)
  end

  object :project do
    field :id, :id
    field :name, :string
    field :public, :boolean
    field :archived, :boolean
    field :client_id, :id
    field :client_name, :string
  end
end
