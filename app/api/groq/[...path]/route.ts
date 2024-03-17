import type { NextRequest } from "next/server";
import handleRequest from "./handle-request";

export const runtime = "edge";

export const preferredRegion = [
  "sin1",
  "cdg1",
  "arn1",
  "dub1",
  "lhr1",
  "iad1",
  "sfo1",
  "pdx1",
  "cle1",
  "gru1",
  "hnd1",
  "icn1",
  "kix1",
  "bom1",
  "syd1",
  "fra1",
  "cpt1",
];

export async function GET(request: NextRequest) {
  return handleRequest(request);
}

export async function HEAD(request: NextRequest) {
  return handleRequest(request);
}

export async function POST(request: NextRequest) {
  return handleRequest(request);
}

export async function PUT(request: NextRequest) {
  return handleRequest(request);
}

export async function DELETE(request: NextRequest) {
  return handleRequest(request);
}

export async function PATCH(request: NextRequest) {
  return handleRequest(request);
}
