class OrderItem < ActiveRecord::Base
  belongs_to :order
  belongs_to :product

  after_create :decrement_product_quantity!

  def decrement_product_quantity!
    self.product.decrement!(:stock, quantity)
  end
end
