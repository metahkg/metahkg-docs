cd docs/api;
version=$(echo "$version" | tr -d '\n')
lastitem=$(ls | tr '\n' ' ' | awk '{ print $(NF) }');
lastitemdev=$(find *-dev -depth | tr '\n' ' ' | awk '{ print $(NF) }');
echo version "$version"
echo lastitem "$lastitem"
echo lastitemdev "$lastitemdev"
if [ -d "$version" ]; then echo "version exists" && exit 0; fi;
if [[ "$version" == *"dev" ]];
then
  mv "$lastitemdev" "$version" && sed -i "s/${lastitemdev}/${version}/g" "${version}/index.mdx";
  echo "/docs/api/${lastitemdev} /docs/api/${version} 301" >> ../../_redirects;
else
  cp -r "$lastitem" "$version" && sed -i "s/${lastitem}/${version}/g" "${version}/index.mdx";
fi;
