class CreateDemos < ActiveRecord::Migration[7.0]
  def change
    create_table :demos do |t|
      t.string :audio
      t.integer :total_plays
      t.belongs_to :user, null: false, foreign_key: true
      t.boolean :is_favorite?

      t.timestamps
    end
  end
end
