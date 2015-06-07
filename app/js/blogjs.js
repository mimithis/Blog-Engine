(function() {

	'use strict';
	var defaultimage = "data:image/png;base64,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"

	var timeoffset = new Date()
	var firstdoc=undefined
	timeoffset = timeoffset.getTimezoneOffset()*60000 //minutes * sec
	var ENTER_KEY = 13;
	var count = 0
	var db = new PouchDB('posts');
	var cdb = new PouchDB('comments');
	PouchDB.sync(db, "http://blogengine.iriscouch.com/posts", {
		live: true,
		retry: true
	})
	PouchDB.sync(cdb, "http://blogengine.iriscouch.com/comments", {
		live: true,
		retry: true
	})
	//~ syncHandler.on('complete', function (info) {
	//~ console.log(info)
	//~ });
	//~ syncHandler.cancel();

	// $('#new-content').summernote();
	var hash = location.hash
	if (hash != "") {
		//showPostById(hash.replace("#",""))
	}
	//db.destroy(function(err,response){})

	//cdb.destroy(function(err,response){});

	//jquery function that gets the post's input elements from DOM
	//and calls the addPost function  
	$('#submit').on('click', function() {
		var title = $('#new-title').val();
		var content = CKEDITOR.instances.editor1.getData();
		var author = $('#new-author').val();

		//console.log(title,content,author)

		if ((title != '') && (author != '') && (content != '')) {
			addPost(title, content, author, function() {
				$('#new-title').val('');
				//delete CKEDITOR.instances.editor1;
				$('#new-author').val('');
				location.reload();

			});

		}

	});
	//funtcion which adds the Post Object with its values into the pouchDb database
	function addPost(titl, cont, auth, callback) {
		var src = null
		var image = $(cont).find("img")[0]
		if (image) {
			src = image.src
		} else {
			src = defaultimage
		}
		 
		var post = {
			_id: String(firstdoc+1),
			title: titl,
			author: auth,
			content: cont,
			completed: false,
			mainimg: src
		};

		db.post(post).then(function(result) {
			console.log("everything is ok");
			callback();

		}).catch(function(err) {
			console.log("nothing is ok");
			console.log(err);

		});
	}

	db.changes({
		include_docs: true,
		live: true,
		since: 'now'
	})
	//.on('change', showPosts);

	//function that creates the html code of each post, that is going to appear on browser
	function eachfor(post) {
		var littlePost = ""

		littlePost = $(post.doc.content).text().slice(0, 300)

		$('#postArea').append(" <div class='row'><div class='col-md-8 col-md-offset-2' >" +
			" <div class='col-md-4' >" +
			"<a href='#' class='thumbnail'> " +
			"<img src='" + post.doc.mainimg + "' alt=''>" +
			"  </a>         " +
			"</div>" +
			" <div class='col-md-8'>" +
			"    <h3>" + post.doc.title + "</h3>" +
			"</div>" +
			"<div class='col-md-8 col-md-offset-0'>" +
			"  <p>" + littlePost + "</p><a href='#'><h5 class='text-right' id='showPostButton_" + post.doc._id + "'>Read more...</h5></a> " +
			"</div>" +
			"</div>" +
			"</div>")
		var singlePost = post.doc

		$('#showPostButton_' + post.doc._id).on('click', function(e) {
			//svinei to periexomeno prwta
			$('#postArea').html('');
			showSinglePost(singlePost.title, singlePost.content, singlePost.author, singlePost._id)
			// db.get(post.doc._id).then(function (singlePost) {

			//     showSinglePost(singlePost.title, singlePost.content, singlePost.author, singlePost._id)

			// })

		})
	}
	//button that refreshes browser's page 
	$('#home').click(function() {
		location.reload();

	})
	//function for showing only one post in full page with its comment area 
	function showSinglePost(title, cont, author, id) {
		location.hash = id
		//apends html elements that shoes a post
		$('#postArea').append("<div class='row'><div class='col-md-12'><h3>" + title +
			"</h3><p>" + cont + "</p><span class='badge'>Author</span><small>" + author +
			"</small></div></div>" +
			"<br><div class='row'><div class='col-md-4'>" +
			"<textarea class='form-control' id='textComArea' rows='3'  placeholder='Write your Comment!' ></textarea><h6>Comments</h6>" +
			"<br><ul id=ul_com_" + id + "></ul></div></div>")

		//a a jquery function that triggers when a comment is adeed
		$("#textComArea").on('keypress', function(e) {
			if (e.keyCode == 13) {
				var com = $(this).val()
				var replaced = escapeSelector(id)
				$("#ul_com_" + replaced).append("<li>" + com + "</li>")
				console.log('its ok')
				addComm(com, id)
				$(this).val('')
			}
		})
		showComment(id)
		console.log('dsd')
	}

	//function that gets Post docs from the Db
	function showPosts() {
		$("#postArea").empty()
		
		db.allDocs({
			include_docs: true,
			live: true,
			limit: 3,
			descending: true
		}).then(function(doc) {
			var posts = doc.rows;
			if(!firstdoc && posts.length==0){
				firstdoc=0
			}else{
				firstdoc=parseInt(posts[0].doc._id)	
			}
			
			var count = 1

			//for each post calls the function that creates the dom 
			//and if the number of post is bigger then calls paging function
			posts.forEach(function(post) {
				if (count < 3) {
					eachfor(post, count);
					console.log(count)
					count++
				} else {
					paging(post.doc._id, 1, false, "")
					console.log("paging" + (post.doc.title))
				}
			})
		
		});
	}
	//function that is triggered when a db change is occured and calls the function which creates the dom
	function showNewPost(post) {

	}
	//a function that triggers when a hash location is changed and calls showSinglePost
	function showPostById(id) {
		console.log("loading id: ", id)
		db.get(id).then(function(doc) {
			showSinglePost(doc.title, doc.content, doc.author, doc._id)
		}).catch(function(err) {
			console.log("error showing post")
		})
	}
	//a function that creates  the pages and pagination's buttons
	function paging(last_post_id, page, lastPage, backPageId) {
		var lim = 3
		var start_key = last_post_id
		var end_key = backPageId
		$('#postArea').append("<div class='row'><div class='col-md-4 col-md-offset-4'>" +
			"<nav><ul class='pagination'  id='pagingArea'></ul></nav></div></div>")

		//if there are more than 1 page requires a Back Page button
		if (page > 1) {
			$('#pagingArea').append("<li><a href='#' aria-label='Back' id ='backPage_" + last_post_id + "'" +
				"><span aria-hidden='true'>&laquo;</span></a></li>")
		}

		$('#pagingArea').append("<li><a href='#'>  Page: " + page + "</a></li>");

		if (!lastPage) {
			$('#pagingArea').append("<li><a href='#' aria-label='Next' id ='nextPage_" + last_post_id + "'" +
				"><span aria-hidden='true'>&raquo;</span></a></li>");
		}

		$('#nextPage_' + escapeSelector(last_post_id)).on('click', function(e) {
			db.allDocs({
				include_docs: true,
				live: true,
				startkey: start_key,
				limit: lim,
				descending: true
			}).then(function(result) {
				var posts = result.rows;
				console.log(posts[0], posts[1])
				//deletes the html in posts Area
				$('#postArea').html('')
				var count = 1

				posts.forEach(function(post) {
					//
					if (count < 3) {
						eachfor(post);
						//if true requires back
						if (count == 1) {
							backPageId = post.doc._id
							console.log(post.doc.title + ' title')
							console.log(backPageId + ' backPageId')
						}
						//checks if this is the last page (lastPage=true)
						if (posts.length == count)
							paging("", page + 1, true, backPageId);
						count++
					} else
						paging(post.doc._id, page + 1, false, backPageId)
				})

			});
		})
		//jquery function that triggers when back Page is clicked 
		//and gets the right posts from the DB that are going to be appeared
		$('#backPage_' + escapeSelector(last_post_id)).on('click', function(e) {
			$('#postArea').html('');
			var count = 1;

			var skip_docs = 0;
			if (page >= 2)
				skip_docs = (page - 2) * 2;
			else
				skip_docs = (page - 1) * 2;

			db.allDocs({
				include_docs: true,
				live: true,
				skip: skip_docs,
				limit: lim,
				descending: true
			}).then(function(result) {
				console.log(result.rows);
				var posts = result.rows;
				posts.forEach(function(post) {
					if (count < 3) {
						eachfor(post);

						if (count == 1) {
							backPageId = post.doc._id
						}

						count++
					} else
						paging(post.doc._id, page - 1, false, backPageId)
				})
			})
		})

	}

	//function that adds a comments in the pouchDb database
	function addComm(comment, post_id) {
		var todo = {
			_id: post_id + Date.now(),

			title: comment,
			key: post_id,
			completed: false
		};
		cdb.put(todo).then(function(result) {
			console.log("Everything is ok");

			console.log(result);

		}).catch(function(err) {
			console.log("nothing is ok");
			console.log(err);

		});
	}

	cdb.changes({

		include_docs: true,
		live: true,
		since: 'now'
	}).on('change', addNewComment);

	//function that is triggered when a change in Comment Db is occured and adds the new comment in dom
	function addNewComment(comment) {

		var replace1 = escapeSelector(comment.doc.key)
		$("#comment_" + replace1).append("<li>" + comment.doc.title + "</li>")
		//$("#comment_"+comment.doc.key).append("<li>"+comment.doc.title+"</li>")

	}

	//a function to create id's that are js well-readable
	function escapeSelector(s) {
		return s.replace(/(:|\.|\[|\])/g, "\\$1");
	}

	//function thats shows the comments 
	//and if there are more than a limit, the comments are hidden until a button is clicked
	function showComment(post_id) {
		cdb.allDocs({
			include_docs: true,
			startkey: post_id,
			endkey: post_id + '\uffff',
			limit: 3
		}).then(function(result) {
			var rows = result.rows;
			console.log('result')
			console.log(result)
			var counter = 1;

			var replace2 = escapeSelector(post_id)
			rows.forEach(function(comment) {
				if (counter < 3) {
					counter++
					console.log(counter)
					$("#ul_com_" + replace2).append("<li>" + comment.doc.title + "</li>");
					//$("#comment_"+post_id).append("<li>"+comment.doc.title+"</li>")

				} else {
					$("#ul_com_" + replace2).append("<button id=" + comment.doc._id + " class='showMoreComments'> Show More comments</button>");
					console.log("kati")
					var comSelector = escapeSelector(comment.doc._id)
					$("#" + comSelector).on('click', function(e) {
						$(this).fadeOut();
						cdb.allDocs({
							include_docs: true,
							startkey: post_id,
							endkey: post_id + '\uffff',
							skip: 2
						}).then(function(result) {
							console.log('tsek')
							var r = result.rows;

							r.forEach(function(com) {

								$("#ul_com_" + replace2).append("<li>" + com.doc.title + "</li>");

							})
						})

					})

				}
			})
		});

	}

	showPosts();
})();

// function peerpouch() {
// 	var NAME = location.hash.slice(1) || "noname",
// 		HUB_URL = "http://blogengine.iriscouch.com/webrtc/",
// 		SHARE_URL = "idb://peerpouch-test-" + NAME;
// 	queue().defer(PouchDB, HUB_URL).defer(PouchDB, SHARE_URL).await(function(e, hub, local) {
// 		if (e) throw e;
// 		window.dbgLocal = local; // expose for console inspection
// 		setInterval(function() {
// 			var id = NAME + '_at_' + Date.now();
// 			local.put({
// 				_id: id
// 			});
// 		}, 15e3);
// 		local.changes({
// 			since: 'latest',
// 			continuous: true,
// 			onChange: function(chg) {
// 				var src = chg.id.split('_at_')[0];
// 				if (src !== NAME) console.log("Got non-local change", chg.id);
// 			}
// 		});
// 		// share our local database
// 		hub.shareDatabase('posts', function(e, d) {
// 			if (e) throw e;
// 		});
// 		// and open whichever other database gets shared next
// 		console.log("Waiting for a new share to appear.");
// 		var listener = hub.getSharedDatabases({
// 			onChange: function(d) {
// 				listener.cancel();
// 				console.log("Trying to connect to", d.dbname);
// 				PouchDB(d.dbname, function(e, remote) {
// 					if (e) throw e;
// 					window.dbgRemote = remote; // expose for console inspection
// 					console.log("Opened remote", remote);
// 					PouchDB.replicate(remote, local, {
// 						continuous: true,
// 						onChange: function(change) {
// 							console.log("RX CHANGE FROM REMOTE", change);
// 						}
// 					});
// 					PouchDB.replicate(local, remote, {
// 						continuous: true,
// 						onChange: function(change) {
// 							console.log("TX CHANGE TO REMOTE", change);
// 						}
// 					});
// 				});
// 			}
// 		}, function() { /*ignore existing*/ });
// 	});
// }
// peerpouch()
