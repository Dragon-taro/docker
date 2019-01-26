FROM debian

RUN apt-get update && apt-get install openjdk-8-jdk -y && apt-get install curl -y
WORKDIR $HOME/nis
RUN curl -o nis-0.6.96.tgz https://nem.ninja/nis-0.6.96.tgz \
    && tar zxvf nis-0.6.96.tgz
WORKDIR package

CMD ./nix.runNis.sh
