class BandsController < ApplicationController

  def index
    bands = Bands.all
    render json: bands
  end
  
  def create
    band = Band.create(band_params)
    render json: band
  end
  
  def show
    found_band = Band.find_by!(params[:id])
    render json: found_band
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
