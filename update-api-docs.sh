cd docs/api;
lastitem=$(ls | tr '\n' ' ' | awk '{ print $(NF) }');
lastitemdev=$(find *-dev -depth | tr '\n' ' ' | awk '{ print $(NF) }');
echo version "$version"
if [ -d "$version" ]; then echo "version exists" && exit 0; fi;
if [[ "$version" == *"-dev" ]];
then
  mv "$lastitemdev" "$version" && sed -i "s/${lastitemdev}/${version}/g" "${version}/index.mdx"
else
  cp -r "$lastitem" "$version" && sed -i "s/${lastitem}/${version}/g" "${version}/index.mdx"
fi;