<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('conversations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sender')->constrained()->cascadeOnDelete();
            $table->unsignedBigInteger('recipient');
            $table->unsignedBigInteger('threadId');
            $table->timestamps();
            $table->foreignId('album_id')->constrained()->cascadeOnDelete();
            $table->unsignedBigInteger('user_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('conversations', function (Blueprint $table) {


        });
    }
};
