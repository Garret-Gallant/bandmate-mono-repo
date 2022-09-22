class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :instrument
      t.string :fav_genre
      t.string :avatar
      t.string :bio

      t.timestamps
    end
  end
end
