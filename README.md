# README

# Language versions are
* Ruby 2.7.4
* Rails 7.0.4
* React 8.11.0

# Database runs on
* Postgresql 12.12

* When starting the application be sure all versions of your system match

# To Start The Application

* Pull the repo from https://github.com/Garret-Gallant/bandmate-mono-repo
* Run 'bundle install' in the terminal to pull all necessary Ruby dependencies
* Run npm install --prefix frontend to pull all necessary React dependencies

# User Experience

* Bandmate.com summary: 
A browsing resource to find and collaborate with other musicians that are interested in forming a band and making music collaboratively.

# A User Can

* Create a profile
* Upload demo tracks (via demo manager page)
* View a users profile from browser within a modal window
* View the artist browser and all audio files within associated with users.

# Roadmap for Future Features

* Allow users to create bands together and post album's demo's, etc. under the band name.
* Search and filter the artist browser depending on genre, usernames, favorites/all, etc.
* Allow users to DM eachother via websockets, add optional contact info to user table for signup.
* Integrate custom audio player so visuals of audio player are better looking.
* Integrate bandcamp to allow bands to post and sell music, merch, etc.
* Migrate to AWS S3 Cloud Storage.

# Technologies used

* Amazon AWS S3 Cloud Storage for hosting all uploaded files remotely.
* Heroku for deployment.
* Active Storage for Amazon S3 and local hosting mp3/wav files.
* Tailwindcss for styling.