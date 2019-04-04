FROM centos:latest

RUN yum update
RUN yum install -y \
		autoconf automake build-essential git libtool libgmp-devel \
		sqlite-devel python net-tools zlib1g-dev libsodium-dev

# install python3
RUN yum install -y https://centos7.iuscommunity.org/ius-release.rpm \
		&& yum install -y python36u python36u-devel python36u-libs
		&& ln -s /usr/bin/python3.6 /usr/bin/python3

# build
RUN ./configure && make
