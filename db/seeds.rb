p "Seeding database..."
#create users
admin = User.create(username: 'admin', password: 'password', instrument: 'keyboard', fav_genre: 'Progressive House', avatar: Faker::Avatar.image(size: "50x50", format: "jpg"), 
bio: 'I am the banhammer, respect eachother, if you criticize someone please be constructive', is_admin?: true)

gerticus = User.create(username: 'Gerticus', password: 'Guitarman20', instrument: 'Guitar', fav_genre: 'Metalcore', avatar: Faker::Avatar.image(size: "50x50", format: "jpg"), 
bio: 'Im also an admin because I made the site, but check out my demos and let me know if youre a metal drummer!', is_admin?: true)

test_user = User.create(username: 'John Smith', password: 'testU$er99', instrument: 'Drums', fav_genre: 'Pop', avatar: Faker::Avatar.image(size: "50x50", format: "jpg"), 
bio: 'I am a test user, feel free to message me but I likely wont respond', is_admin?: true)

#create demo tracks
demo1 = Demo.create(audio: "sub with local audio file eventually", total_plays: 0, user_id: admin.id, is_favorite?: true)
demo2 = Demo.create(audio: "Babtism By Fire X", total_plays: 27, user_id: gerticus.id, is_favorite?: true)
demo2 = Demo.create(audio: "I am a test song to be replaced by an Active Storage file", total_plays: 999, user_id: test_user.id, is_favorite?: false)

# create some bands
bbf = Band.create(band_name: 'Babtism By Fire', founder_id: gerticus.id)
the_administrators = Band.create(band_name: 'The Administrators', founder_id: admin.id)
the_users = Band.create(band_name: 'The Users', founder_id: test_user.id)

# add members to a few bands
band_member_1 = JoinUserBand.create(user_id: gerticus.id, band_id: bbf.id)
band_member_2 = JoinUserBand.create(user_id: admin.id, band_id: the_administrators.id)
band_member_3 = JoinUserBand.create(user_id: gerticus.id, band_id: the_administrators.id)
p "All seeds created!"