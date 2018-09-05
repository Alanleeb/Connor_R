class Api::ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]
  
  def index
    render json: Product.all 
  end

  def show
    render json: @product
  end

  def create
    product = Product.new(product_params)
    if product.save
        render json: product
    else
        render json: {errors: contact.errors.full_messages}, status: 422
    end
  end

  def update
    if @product.update(product_params)
      render json: @product
    else 
      render_error(@product) 
    end
  end

  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: {errors: @product.errors.full_messages}, status: 422
    end
  end

  def destroy
    Product.find(params[:id]).destroy
  end

  private

  def set_product 
    @product = Product.find(params[:id])
  end

  def product_params 
    params.require(:product).permit(
      :product_id, 
      :product_name,
      :price,
      :category,
      :distance_preference,
      :state,
      :country,
      :international,
      :brand,
      :size,
      )
  end

end

