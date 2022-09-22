class CreateBands < ActiveRecord::Migration[7.0]
  def change
    create_table :bands do |t|
      t.string :band_name
      t.integer :founder_id

      t.timestamps
    end
  end
end
