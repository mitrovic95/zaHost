package dm.pozoristePromena.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dm.pozoristePromena.dto.RepertoarDTO;
import dm.pozoristePromena.model.Repertoar;
import dm.pozoristePromena.service.RepertoarService;

@RestController
@RequestMapping("/api/repertoar")
public class RepertoarController {

	 @Autowired
	 AuthenticationManager authenticationManager;

	@Autowired
	private RepertoarService repertoarService;

//	 @PreAuthorize("isAuthenticated()")
	@GetMapping
	public ResponseEntity<List<RepertoarDTO>> getRepertoarPage() {
		final List<RepertoarDTO> retVal = repertoarService.findAll().stream().map(RepertoarDTO::new)
				.collect(Collectors.toList());

		return new ResponseEntity<>(retVal, HttpStatus.OK);
	}

//	 @PreAuthorize("isAuthenticated()")
	@GetMapping("/{id}")
	public ResponseEntity<RepertoarDTO> getRepertoar(@PathVariable Long id) {
		final Repertoar repertoar = repertoarService.findOne(id);

		if (repertoar == null) {
			return new ResponseEntity<RepertoarDTO>(HttpStatus.NOT_FOUND);
		}

		final RepertoarDTO repertoarDTO = new RepertoarDTO(repertoar);
		return new ResponseEntity<>(repertoarDTO, HttpStatus.OK);
	}

	 @PreAuthorize("hasAnyAuthority('ADMIN')")
	@PostMapping
	public ResponseEntity<String> createNewRepertoar(@RequestBody Repertoar repertoar) {
		final Optional<Repertoar> checkRepertoar = repertoarService.findById(repertoar.getId());
		if (checkRepertoar.isPresent()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		} else if (repertoar.getId() == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		repertoarService.save(repertoar);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	 @PreAuthorize("hasAnyAuthority('ADMIN')")
	@PutMapping("/{id}")
	public ResponseEntity<String> updateRepertoar(@PathVariable Long id, @RequestBody Repertoar repertoar) {
		final Repertoar foundRepertoar = repertoarService.findOne(id);
		if (foundRepertoar == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		foundRepertoar.setDatum(repertoar.getDatum());
		foundRepertoar.setPredstava(repertoar.getPredstava());
		repertoarService.save(foundRepertoar);
		return new ResponseEntity<>(HttpStatus.OK);

	}

	 @PreAuthorize("hasAnyAuthority('ADMIN')")
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteRepertoar(@PathVariable Long id) {
		final Repertoar foundRepertoar = repertoarService.findOne(id);
		if (foundRepertoar == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		repertoarService.remove(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}