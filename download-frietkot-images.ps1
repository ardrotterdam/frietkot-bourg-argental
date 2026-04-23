# download-frietkot-images.ps1
# Downloads all usable images from the old Frietkot site (frietkot-42.fr)
# Renames them to SEO-friendly filenames
# Places them in /public/images/ with subfolder structure
#
# USAGE: Run this from the root of your frietkot-redesign project:
#   cd C:\Users\adria\OneDrive\AKTIEF\frietkost-redesign
#   .\download-frietkot-images.ps1

$ErrorActionPreference = "Stop"

# Create folder structure
$folders = @(
    "public\images\hero",
    "public\images\food",
    "public\images\restaurant",
    "public\images\rooms",
    "public\images\beer"
)

foreach ($folder in $folders) {
    if (-not (Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder -Force | Out-Null
        Write-Host "Created: $folder" -ForegroundColor Green
    }
}

# Base URL for all the images
$base = "https://frietkot-42.fr/uploads/media/images/cms/medias/thumb_/cms/medias"

# Image list: [source_id, target_path, description]
$images = @(
    # HERO / LOGO
    @("67ee945f3dba7", "hero\frietkot-logo-belgian-fries.webp", "Logo"),
    @("67f3c1cbab0e6", "hero\frietkot-logo-transparent.webp", "Logo transparent"),
    @("6880b01c35792", "hero\frietkot-belgian-fries-hero.webp", "Hero friet"),
    @("67fe47cd7dcb8", "hero\frietkot-bourg-argental-background.webp", "FRIETKOT-bg"),
    
    # FOOD - carbonade, frieten, plats du jour, sauzen
    @("6880b02733b73", "food\frietkot-belgian-fries-golden.webp", "IMG_3147 Friet"),
    @("67fe47e6b8de5", "food\plat-du-jour-carbonade-flamande.webp", "Plat du jour"),
    @("67fe47ccf1376", "food\specialite-belge-plat-traditionnel.webp", "Plat traditionnel"),
    @("67fe47ccc1b2f", "food\menu-friterie-belge.webp", "Menu"),
    @("68d55198b044f", "food\frietkot-carbonade-flamande-plated.webp", "IMG_3148"),
    @("68d5519a39095", "food\frietkot-belgian-fries-crispy.webp", "IMG_3149"),
    @("68d5519b9d691", "food\frietkot-plats-speciaux.webp", "IMG_3150"),
    @("68d5519d054b1", "food\frietkot-belgian-dish-close-up.webp", "IMG_3146"),
    @("68d5519e59663", "food\frietkot-frites-belges-croustillantes.webp", "IMG_3147 v2"),
    
    # RESTAURANT INTERIOR / AMBIANCE
    @("67fe47cc2b038", "restaurant\sejour-bourg-argental.webp", "Sejour"),
    @("67fe47cc90634", "restaurant\ambiance-conviviale-friterie.webp", "Ambiance"),
    @("6880b0f522682", "restaurant\frietkot-salle-restaurant.webp", "Salle"),
    @("6880b10093eb8", "restaurant\frietkot-terrasse-friterie.webp", "Terrasse"),
    @("68d551a4a8d53", "restaurant\frietkot-interieur-belge.webp", "Interieur 1"),
    @("68d551a54db3f", "restaurant\frietkot-ambiance-chaleureuse.webp", "Interieur 2"),
    @("68d551a5b4d88", "restaurant\frietkot-cuisine-ouverte.webp", "Cuisine ouverte"),
    @("68d551a605251", "restaurant\frietkot-friteuse-professionnelle.webp", "Friteuse"),
    @("68d551a666046", "restaurant\frietkot-chef-au-travail.webp", "Chef"),
    @("68d551a6a332e", "restaurant\frietkot-cornet-frites-belges.webp", "Cornet"),
    @("68d551a6d64e2", "restaurant\frietkot-sauces-maison.webp", "Sauces"),
    @("68d551a71bc61", "restaurant\frietkot-detail-produits-frais.webp", "Produits frais"),
    @("68d551a74600a", "restaurant\frietkot-table-convivialite.webp", "Table"),
    @("68d551a77a57e", "restaurant\frietkot-service-personnalise.webp", "Service"),
    
    # BEER
    @("67fe47cbe0685", "beer\vins-et-bieres-cave-bourg-argental.webp", "Vins et bieres"),
    @("698ef8f732b26", "beer\frietkot-biere-belge-trappiste.webp", "Biere 1"),
    @("698ef9067821e", "beer\frietkot-selection-bieres-belges.webp", "Biere 2"),
    
    # ROOMS
    @("6930196495e63", "rooms\chambre-delirium-auberge-frietkot.webp", "Delirium"),
    @("6930192727685", "rooms\chambre-duvel-auberge-frietkot.webp", "Duvel"),
    @("6880b4393f7b3", "rooms\chambre-queue-de-charrue-auberge.webp", "Queue de Charrue")
)

$total = $images.Count
$success = 0
$failed = 0

Write-Host ""
Write-Host "Downloading $total images from frietkot-42.fr..." -ForegroundColor Cyan
Write-Host ""

foreach ($img in $images) {
    $sourceId = $img[0]
    $targetPath = "public\images\$($img[1])"
    $desc = $img[2]
    
    $url = "$base/${sourceId}_images_large.webp"
    
    try {
        Invoke-WebRequest -Uri $url -OutFile $targetPath -UseBasicParsing -ErrorAction Stop
        $size = [math]::Round((Get-Item $targetPath).Length / 1KB, 1)
        Write-Host "  OK  $desc ($size KB)" -ForegroundColor Green
        $success++
    }
    catch {
        Write-Host "  FAIL  $desc - trying _medium fallback..." -ForegroundColor Yellow
        $urlMedium = "$base/${sourceId}_images_medium.webp"
        try {
            Invoke-WebRequest -Uri $urlMedium -OutFile $targetPath -UseBasicParsing -ErrorAction Stop
            $size = [math]::Round((Get-Item $targetPath).Length / 1KB, 1)
            Write-Host "       OK (medium) $desc ($size KB)" -ForegroundColor Green
            $success++
        }
        catch {
            Write-Host "       FAIL $desc" -ForegroundColor Red
            $failed++
        }
    }
}

Write-Host ""
Write-Host "===================================" -ForegroundColor Cyan
Write-Host "Done. Success: $success / $total" -ForegroundColor Cyan
if ($failed -gt 0) {
    Write-Host "Failed: $failed" -ForegroundColor Red
}
Write-Host "===================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Images saved to /public/images/ in 5 subfolders:" -ForegroundColor White
Write-Host "  - hero/      (4 images)" -ForegroundColor Gray
Write-Host "  - food/      (9 images)" -ForegroundColor Gray
Write-Host "  - restaurant/ (13 images)" -ForegroundColor Gray
Write-Host "  - beer/      (3 images)" -ForegroundColor Gray
Write-Host "  - rooms/     (3 images)" -ForegroundColor Gray
Write-Host ""
Write-Host "Next: open Cursor and ask it to update all <Image src=...> paths" -ForegroundColor Yellow
Write-Host "to use these new /images/... paths." -ForegroundColor Yellow
