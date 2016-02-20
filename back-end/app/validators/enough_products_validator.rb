class EnoughProductsValidator < ActiveModel::Validator
  def validate(record)
    record.order_items.each do |item|
      product = item.product
      if item.quantity > product.stock
        record.errors["#{product.title}"] << "Is out of stock, just #{product.stock} left"
      end
    end
  end
end
