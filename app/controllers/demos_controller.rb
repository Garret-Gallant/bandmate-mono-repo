class DemosController < ApplicationController
  def index
    demo = Demo.all
    render json: demo, status: 200
  end

  def show
    userDemos = @current_user.demos
    render json: userDemos, status: 200
  end
  
  def create
    demo = Demo.create!(demo_params)
    demo.audio.attach(params[:audio_file])
    render json: demo, status: :created
  end
  
  def destroy
    demo = Demo.find(params[:id])
    demo.destroy
  end

  private 

  def demo_params
    params.permit(:name, :audio, :audio_file, :total_plays, :is_favorite?, :user_id)
  end

end
