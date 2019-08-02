var list_ids = [], // List of known IDs
    dupes = [],
    $list = $('ul');

$('body').find('[id]').each(function() {
    if (this.id) {
      if (!/^[A-Za-z]/.test(this.id)) {
        $list.append('<li>The ID <code>#' + this.id + '</code> is not valid; it must begin with a letter</li>');
      }
      else {
        list_ids.push(this.id);
      }
    }
});

// Count occurences of each ID
$.each(list_ids, function(i, id) {
  var regex = new RegExp('\\b' + id + '\\b', 'g'),
      numMatches = list_ids.join(',').match(regex).length;

  if (numMatches > 1 && dupes.indexOf(id) === -1) {
    $list.append('<li style="color:red"><code>#' + id + '</code> is being used in ' + numMatches + ' places</li><br/>');
    dupes.push(id);
  }
  else if (numMatches === 1) {
    $list.append('<li style="color:green"><code>#' + id + '</code> is NOT duplicated</li><br/>');
  }
});