#include <Arduino.h>

#define LED_PIN 5
#define DHT22_PIN 18
#define MQ2_PIN 4
#define LDR_PIN 12

void setup() {
  Serial.begin(115200);
  pinMode(LED_PIN, OUTPUT);
  pinMode(DHT22_PIN, INPUT);
  pinMode(MQ2_PIN, INPUT);
  pinMode(LDR_PIN, INPUT);
}

void loop() {}