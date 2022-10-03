class UsersController < ApplicationController
skip_before_action :authenticate_user, only: [:create, :index]

def index
  user = User.all
  render json: user
end

def create
  user = User.create!(user_params)
  session[:user_id] = user.id
  render json: user
end

def show
  render json: @current_user
end

def update
  user = User.find_by(params[:user_id])
  user.update(user_params)
  render json: user
end

def destroy
  user = User.find(params[:id])
  user.destroy
end

private

def user_params
  params.permit(:username, :password, :instrument, :fav_genre, :avatar, :bio)
end

end
