require 'spec_helper'

describe Order do
  before(:each) do
    product_1 = FactoryGirl.create :product, price: 100
    product_2 = FactoryGirl.create :product, price: 85

    @order = FactoryGirl.build :order, product_ids: [product_1.id, product_2.id]
    subject { @order }

  end

  it { should respond_to(:total) }
  it { should respond_to(:user_id) }
  it { should validate_presence_of :user_id }

  it { should belong_to :user }

  it { should have_many(:order_items) }
  it { should have_many(:products).through(:order_items) }

  describe '#calculate_total!' do
    before(:each) do
      product_1 = FactoryGirl.create :product, price: 100
      product_2 = FactoryGirl.create :product, price: 85

      placement_1 = FactoryGirl.build :order_item, product: product_1, quantity: 3
      placement_2 = FactoryGirl.build :order_item, product: product_2, quantity: 15

      @order = FactoryGirl.build :order

      @order.order_items << placement_1
      @order.order_items << placement_2
    end

    it "returns the total amount to pay for the products" do
      expect{@order.calculate_total!}.to change{@order.total.to_f}.from(0).to(1575)
    end
  end

  describe "#valid?" do
    before do
      product_1 = FactoryGirl.create :product, price: 100, stock: 5
      product_2 = FactoryGirl.create :product, price: 85, stock: 10


      placement_1 = FactoryGirl.build :order_item, product: product_1, quantity: 3
      placement_2 = FactoryGirl.build :order_item, product: product_2, quantity: 15

      @order = FactoryGirl.build :order

      @order.order_items << placement_1
      @order.order_items << placement_2
    end

    it "becomes invalid due to insufficient products" do
      expect(@order).to_not be_valid
    end
  end
end
