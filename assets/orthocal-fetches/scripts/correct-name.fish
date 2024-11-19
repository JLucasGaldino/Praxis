#!/bin/fish

for j in *json.pt.json
  mv $j ( echo $j | sed 's/.json.pt.json/_unpretty.json/g' | sed 's/en/pt/g' )
end
