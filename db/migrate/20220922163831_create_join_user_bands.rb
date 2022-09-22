class CreateJoinUserBands < ActiveRecord::Migration[7.0]
  def change
    create_table :join_user_bands do |t|
      t.integer :user_id
      t.integer :band_id

      t.timestamps
    end
  end
end
