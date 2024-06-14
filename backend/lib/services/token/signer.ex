defmodule Services.Token.Signer do
  def generate do
    Joken.Signer.create(
      "HS256",
      System.get_env("SECRET_KEY_BASE")
    )
  end
end
