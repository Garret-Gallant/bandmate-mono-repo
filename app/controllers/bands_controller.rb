class BandsController < ApplicationController

  def index
    render json: Band.all, status: 200
  end
  
  def create
    band = Band.create(band_params)
    render json: band, status: :created
  end
  
  def show
    found_band = Band.find_by!(params[:id])
    render json: found_band, status: 200
  end
  
  def update
    band = Band.find_by!(params[:id])
    band.update(params[:band_params])
    render json: band, status: :accepted
  end
  
  def destroy
    band = Band.find_by!(params[:id])
    band.destroy
    head :no_content, status: :not_found
  end
  
  private 

  def band_params
    params.permit(:band_name, :founder_id)
  end

end
