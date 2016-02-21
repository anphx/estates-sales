class Api::V1::DashboardController < ApplicationController
  # before_action :authenticate_with_token!
  respond_to :json
  PER_PAGE = 10
  PAGE = 1

  def product_list
    render json: Product.page(params[:page] || PAGE).per(params[:per_page] || PER_PAGE), status: :ok
  end

  def products_by_city
    render json: products_by_city_json, status: :ok
  end

  def orders_by_city
    render json: orders_by_city_json, status: :ok
  end

  private

  def products_by_city_json
    Product.joins(:address).group("addresses.city").count
  end

  def orders_by_city_json
    Order.joins(order_items: { product: :address }).group("addresses.city").count
  end

end
