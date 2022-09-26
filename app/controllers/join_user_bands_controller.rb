class JoinUserBandsController < ApplicationController

  def index
    join_table = JoinUserBands.all
    render json: join_table
  end
  
end
