import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { ElectionContract } from "../target/types/election_contract";

describe("ElectionContract", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.ElectionContract as Program<ElectionContract>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
