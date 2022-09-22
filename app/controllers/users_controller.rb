class UsersController < ApplicationController
skip_before_action :authenticate_user, only: [:create, :index]

def index
  user = User.find_by(params[:user_id])
  render json: user
end

def create
  user = User.create(user_params)
  render json: user_params
end

def show
  found_user = User.find_by(session[:user_id])
  render json: found_user
end

def update
  user = User.find_by(session[:user_id])
  user.update(user_params)
  render json: user
end

def destroy
  user = User.find_by(session[:user_id])
  user.destroy
end

private

def user_params
  params.permit(:username, :password_digest, :instrument, :fav_genre, :avatar, :bio)
end
end
