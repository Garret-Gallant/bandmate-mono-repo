# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative "config/application"

Rails.application.load_tasks

desc 'start postgresql server'
task :start_psql do
  sh 'sudo service postgresql start'
end

desc 'stop postgresql server'
task :stop_psql do
  sh 'sudo service postgresql stop'
end

desc 'start react frontend in browser'
task :start_react do
  sh 'npm run start --prefix client'
end
