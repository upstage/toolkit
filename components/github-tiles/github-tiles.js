(function ($, _, Gh3) {

  $.support.cors = true;

  var methods = {

    init: function(options) {

      return this.each(function() {

        var $this = $(this),
            data = $this.data('github-tiles'),
            user,
            repos;

        if(!data) {
          // initialize
          data = {};
          data.target = $this;
          data.$repos = $(options.repos);
          data.$featured = $(options.featured);
          data.user = new Gh3.User(options.user);
          data.repos = new Gh3.Repositories(data.user);
          data.repositories = [];
          $(this).data('github-tiles', data);
        }

        data.repos.fetch({}, "", function(err, res) {
          if(err) {
            $.error(err);
          }
          else {
            var i = 0, l = data.repos.repositories.length;
            //console.log('getting each repo');
            data.repos.eachRepository(function(repo) {
              repo.fetch(function(err, repo) {
                //console.log('repo ' + (i+1) + ': ', repo);
                data.repositories.push(repo);
                i++;

                if(i===l) {
                  renderFeaturedRepos(data.$featured, data.repositories);
                  renderRepos(data.$repos, data.repositories);
                }
              });
            });
          }
        });

      });
    }
  };

  var renderRepos = function(target, repos) {
    $.each(repos, function(i, repo) {
      renderRepo(target, repo);
    });
  };

  var renderFeaturedRepos = function(target, repos) {
    $.each(repos, function(i, repo) {
      if(i<3) {
        renderFeaturedRepo(target, repo);
      }
    });
  };

  var renderRepo = function(target, repo) {
    var $item = $("<li>").addClass("repo span-1 " + (repo.language || '').toLowerCase());
    var $link = $("<a>").attr("href", repo.html_url).appendTo($item);
    $link.append($("<h2>").text(repo.name));
    $link.append($("<h3>").text(repo.language));
    $link.append($("<p>").text(repo.description));
    $item.appendTo(target);
  };

  var renderFeaturedRepo = function(target, repo) {
    var $item = $("<li>");
    var $name = $("<a>").attr("href", repo.html_url).text(repo.name);
    $item.append($("<span>").addClass("name").append($name));

    var $time = $("<a>").attr("href", repo.html_url + "/commits").text(repo.pushed_at); //strftime("%h %e, %Y", repo.pushed_at));
    $item.append($("<span>").addClass("time").append($time));

    $item.append('<span class="bullet">&sdot;</span>');

    var $watchers = $("<a>").attr("href", repo.html_url + "/watchers").text(repo.watchers + " stargazers");
    $item.append($("<span>").addClass("watchers").append($watchers));

    $item.append('<span class="bullet">&sdot;</span>');

    var $forks = $("<a>").attr("href", repo.html_url + "/network").text(repo.forks + " forks");
    $item.append($("<span>").addClass("forks").append($forks));

    $item.appendTo(target);
  };

  $.fn.githubTiles = function(method) {

    if(methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.githubTiles');
    }

  };


})(jQuery, _, Gh3);
