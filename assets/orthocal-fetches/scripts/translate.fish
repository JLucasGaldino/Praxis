#!/bin/fish
for file in *en*;
  jsontt $file -m google2 -f en -t pt -fb yes -n $file -cl 3;
end
