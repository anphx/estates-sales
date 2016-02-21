require 'spec_helper'

describe OrderItem do
  let(:order_item) { FactoryGirl.build :order_item }
  subject { order_item }

  it { should respond_to :order_id }
  it { should respond_to :product_id }
  it { should respond_to :quantity }

  it { should belong_to :order }
  it { should belong_to :product }

  describe "#decrement_product_quantity!" do
    it "decreases the product quantity by the order item quantity" do
      product = order_item.product
      expect{order_item.decrement_product_quantity!}.to change{product.stock}.by(-order_item.quantity)
    end
  end
end
