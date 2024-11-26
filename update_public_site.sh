#!/bin/sh

pushd "$(dirname "${BASH_SOURCE[0]}")"
killall hugo
hugo --cleanDestinationDir && rsync -av --delete public/ icpc@acsweb.ucsd.edu:public_html
popd
