class Api::ProductsController < ApplicationController
  def index
    render :json Product.all
  end

  def create
    render :json Product.new(product_params) 
    if products.save
      render json: product 
    else 
      render_error(product)
    end
  end

  def update
    if @product.update(product_params)
      render json: @product
    else 
      render_error(@product) 
    end
  end

  def destroy
    Product.find(params[:id]).destroy
  end

  private

  def product_params 
    params.require(:product).permit(
      :product_id, 
      :product_name,
      :price,
      :category,
      :distance_preference,
      :city,
      :state,
      :zip,
      :country,
      :brand,
      :size,
      :gender,
      :photo,
      :description
      )
  end

end
