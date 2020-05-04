FROM ubuntu:latest
RUN apt-get update
RUN apt-get install -y openjdk-11-jre-dcevm
ADD script.sh /script.sh
ENTRYPOINT [ "/script.sh" ]