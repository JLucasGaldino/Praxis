#!/bin/fish
for j in *_unpretty.json
  jq . $j > ( echo $j | sed 's/_unpretty//g' )
end
