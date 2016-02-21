class Api::V1::ProductsController < ApplicationController
  respond_to :json

  before_action :authenticate_with_token!, only: [:create]

  def show
    respond_with Product.find(params[:id])
  end

  def index
    respond_with Product.search(params)
  end

  def create
    product = current_user.products.build(product_params)
    if product.save
      render json: product, status: :created, location: [:api, product]
    else
      render json: { errors: product.errors }, status: :unprocessable_entity
    end
    
  end

  private

  def product_params
    params.require(:product).permit(:title, :price, :published, :description)
  end

end
