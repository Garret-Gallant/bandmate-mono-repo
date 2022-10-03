class DemosController < ApplicationController
  def index
    demo = Demo.all
    render json: demo
  end
  
  def create
    demo = Demo.create(demo_params)
    demo.audio.attach(params[:audio_file])
    render json: demo, status: :created
  end

  # def latest
  #   @demo = Demo.last
  #   render json: demo
  # end
  
  def show
    demo = Demo.find_by(params[:id])
    render json: demo
  end
  
  def destroy
    demo = Demo.find_by(params[:id])
    demo.destroy
  end

  private 

  def demo_params
    params.permit(:name, :audio_file, :total_plays, :is_favorite?)
  end

end
