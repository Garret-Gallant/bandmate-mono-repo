class DemosController < ApplicationController
  def index
    demo = Demo.all
    render json: demo
  end
  
  def create
    demo = Demo.create!(demo_params)
    # demo.attach(params[:file])
    render json: demo
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
    params.permit(:name, :audio)
  end

end
