class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.string :location
      t.string :longitude
      t.string :latitude
      t.references :product, index: true

      t.timestamps
    end
  end
end
