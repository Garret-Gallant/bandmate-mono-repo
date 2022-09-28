class AddNameToDemos < ActiveRecord::Migration[7.0]
  def change
    add_column :demos, :name, :string
  end
end
