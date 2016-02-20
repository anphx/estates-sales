class Order < ActiveRecord::Base
  belongs_to :user
  before_validation :calculate_total!

  validates :total, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :user_id, presence: true
  validates_with EnoughProductsValidator

  has_many :order_items
  has_many :products, through: :order_items

  def calculate_total!
    self.total = 0
    order_items.each do |item|
      self.total += item.product.price * item.quantity
    end
  end

  def build_order_items_with_product_ids_and_quantities(product_ids_and_quantities)
    product_ids_and_quantities.each do |product_id_and_quantity|
      id, quantity = product_id_and_quantity # [1,5]

      self.order_items.build(product_id: id, quantity: quantity)
    end
  end
end
