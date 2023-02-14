FROM node:16
RUN  apt-get update
RUN  apt-get install -y zsh
RUN  npm install -g nodemon
USER node
RUN  wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O - | zsh || true
CMD ["zsh"]