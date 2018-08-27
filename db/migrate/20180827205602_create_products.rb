class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :product_name
      t.integer :price
      t.string :category
      t.integer :distance_preference
      t.string :city
      t.string :state
      t.string :zip
      t.string :country
      t.boolean :international
      t.string :brand
      t.string :size
      t.string :gender
      t.string :photo
      t.string :description

      t.timestamps
    end
  end
end
